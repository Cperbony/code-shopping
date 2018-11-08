<?php

declare(strict_types=1);

namespace CodeShopping\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;

class UserPhoto extends Model
{
    const BASE_PATH = 'app/public';
    const DIR_USERS = 'users_photos';

    const USERS_PATH = self::BASE_PATH . '/' . self::DIR_USERS;

    protected $fillable = [
        'file_name',
        'user_id'
    ];

    public static function photosPath($userId)
    {
        $path = self::USERS_PATH;
        return storage_path("{$path}/{$userId}");
    }

    /**
     * @param int $userId
     * @param array $files
     * @return Collection
     * @throws \Exception
     */
    public static function createWithPhotosFiles(int $userId, array $files): Collection
    {
        try {
            self::uploadFiles($userId, $files);
            \DB::beginTransaction();
            $photos = self::createPhotosModels($userId, $files);
            \DB::commit();
            return new Collection($photos);
        } catch (\Exception $e) {
            self::deleteFiles($userId, $files);
            \DB::rollBack();
            throw $e;
        }
    }

    /**
     * @param UploadedFile $file
     * @return UserPhoto
     * @throws \Exception
     */
    public function updateWithPhoto(UploadedFile $file): UserPhoto
    {
        try {
            self::uploadFiles($this->user_id, [$file]);
            \DB::beginTransaction();
            $this->deletePhoto($this->file_name);
            $this->file_name = $file->hashName();
            $this->save();
            \DB::commit();
            return $this;
        } catch (\Exception $e) {
            self::deleteFiles($this->user_id, [$file]);
            \DB::rollBack();
            throw $e;
        }
    }

    /**
     * @return bool
     * @throws \Exception
     */
    public function deleteWithPhoto(): bool{
        try {
            \DB::beginTransaction();
            $this->deletePhoto($this->file_name);
            $result = $this->delete();
            \DB::commit();
            return $result;
        } catch (\Exception $e) {
            \DB::rollBack();
            throw $e;
        }
    }

    private function deletePhoto($fileName)
    {
        $dir = self::photosDir($this->user_id);
        \Storage::disk('public')->delete("{$dir}/{$fileName}");
    }

    public static function deleteFiles(int $userId, array $files)
    {
        /** @var UploadedFile $file */
        foreach ($files as $file) {
            $path = self::photosPath($userId);
            $photoPath = "{$path}/{$file->hashName()}";
            if (file_exists($photoPath)) {
                \File::delete($photoPath);
            }
        }
    }

    public static function uploadFiles($userId, array $files)
    {
        $dir = self::photosDir($userId);
        /** @var UploadedFile $file */
        foreach ($files as $file) {
            $file->store($dir, ['disk' => 'public']);
        }
    }

    private static function createPhotosModels(int $userId, array $files): array
    {
        $photos = [];
        /** @var UploadedFile $file */
        foreach ($files as $file) {
            $photos[] = self::create([
                'file_name' => $file->hashName(),
                'user_id' => $userId
            ]);
            return $photos;
        }
    }

    public function getPhotoUrlAttribute()
    {
        $path = self::photosDir($this->user_id);
        return asset("storage/{$path}/{$this->file_name}");
    }

    public static function photosDir($userId)
    {
        $dir = self::DIR_USERS;
        return "{$dir}/{$userId}";
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class)->withTrashed();
    }
}
