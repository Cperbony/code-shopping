<?php

declare(strict_types=1);

namespace CodeShopping\Firebase;

use Kreait\Firebase;
use Kreait\Firebase\Database\Reference;

trait FirebaseSync
{
    protected static $OPERATION_CREATE = 1;
    protected static $OPERATION_UPDATE = 2;

    public static function bootFirebaseSync()
    {
        static::created(function ($model) {
            $model->syncFbCreate();
        });

        static::updated(function ($model) {
            $model->syncFbUpdate();
        });

        static::deleted(function ($model) {
            $model->syncFbRemove();
        });

        if (method_exists(__CLASS__, 'pivotAttached')) {
            static::pivotAttached(function ($model, $relationName, $pivotIds, $pivotIdAttribute) {
                $model->syncPivotAttached($model, $relationName, $pivotIds, $pivotIdAttribute);
            });
        }

        if (method_exists(__CLASS__, 'pivotDetached')) {
            static::pivotDetached(function ($model, $relationName, $pivotIds) {
                $model->syncPivotDetached($model, $relationName, $pivotIds);
            });
        }


    }

    protected function syncFbCreate()
    {
        $this->syncFbSet(self::$OPERATION_CREATE);
    }

    protected function syncFbUpdate()
    {
        $this->syncFbSet(self::$OPERATION_UPDATE);
    }

    protected function syncFbSet($operation = null)
    {
        $data = $this->toArray();
        $this->setTimestamps($data, $operation);
        $this->getModelReference()->update($this->toArray());
    }

    protected function setTimestamps(&$data, $operation = null)
    {
        if ($operation == self::$OPERATION_CREATE) {
            $data['created_at'] = ['.sv' => 'timestamp'];
            $data['updated_at'] = ['.sv' => 'timestamp'];
        }
        if ($operation == self::$OPERATION_UPDATE) {
            if (isset($data['created_at'])) {
                unset($data['created_at']);
            }
            $data['updated_at'] = ['.sv' => 'timestamp'];
        }
    }

    protected function syncFbRemove()
    {
        $this->getModelReference()->remove();
    }

    /**
     * @param $model
     * @param $relationName
     * @param $pivotIds
     * @param $pivotIdAttribute
     * @throws \Exception
     */
    protected function syncPivotAttached($model, $relationName, $pivotIds, $pivotIdAttribute)
    {
        throw new \Exception('Not Implemented');
    }

    /**
     * @param $model
     * @param $relationName
     * @param $pivotIds
     * @throws \Exception
     */
    protected function syncPivotDetached($model, $relationName, $pivotIds)
    {
        throw new \Exception('Not Implemented');
    }

    protected function getModelReference(): Reference
    {
        $path = $this->getTable() . '/' . $this->getKey();
        return $this->getFirebaseDatabase()->getReference($path);
    }

    protected function getFirebaseDatabase(): Firebase\Database
    {
        $firebase = app(Firebase::class);
        return $firebase->getDatabase();
    }
}