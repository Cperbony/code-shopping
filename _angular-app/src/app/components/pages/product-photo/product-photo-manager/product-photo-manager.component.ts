import {Component, OnInit, ViewChild} from '@angular/core';
import {Product, ProductPhoto} from "../../../../models";
import {ProductPhotoHttpService} from "../../../../services/http/product-photo-http.service";
import {ActivatedRoute} from "@angular/router";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {ProductPhotoEditModalComponent} from "../product-photo-edit-modal/product-photo-edit-modal.component";
import {ProductPhotoDeleteModalComponent} from "../product-photo-delete-modal/product-photo-delete-modal.component";

declare const $;

@Component({
    selector: 'product-photo-manager',
    templateUrl: './product-photo-manager.component.html',
    styleUrls: ['./product-photo-manager.component.css']
})
export class ProductPhotoManagerComponent implements OnInit {

    photos: ProductPhoto[] = [];
    product: Product = null;
    productId: number;
    photoIdToEdit: number;
    photoIdToDelete: number;

    wordFoto: string;
    wordCadastrada: string;

    @ViewChild(ProductPhotoEditModalComponent)
    editModal: ProductPhotoEditModalComponent;

    @ViewChild(ProductPhotoDeleteModalComponent)
    deleteModal: ProductPhotoDeleteModalComponent;

    constructor(private productPhotoHttp: ProductPhotoHttpService,
                private route: ActivatedRoute,
                private notifyMessage: NotifyMessageService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.productId = params.product;
            this.getPhotos();
        });
        this.configFancyBox();
    }

    getPhotos() {
        this.productPhotoHttp
            .list(this.productId)
            .subscribe(data => {
                this.photos = data.photos;
                this.product = data.product;
            })
    }

    configFancyBox() {
        $.fancybox.defaults.btnTpl.edit = `
        <a class="fancybox-button" data-fancybox-edit title="Substituir" 
        href="javascript:void(0)" style="text-align: center">
         <i class="fas fa-edit"></i>
         </a>
         `;

        $.fancybox.defaults.btnTpl.delete = `
        <a class="fancybox-button" data-fancybox-delete title="Excluir" 
        href="javascript:void(0)" style="text-align: center">
         <i class="fas fa-trash"></i>
         </a>
         `;

        $.fancybox.defaults.buttons = ['download', 'edit', 'delete'];

        $('body').on('click', '[data-fancybox-edit]', (e) => {
            const photoId = this.getPhotoIdFromSlideShow();
            this.photoIdToEdit = photoId;
            console.log(photoId);
            this.editModal.showModal();
        });
        $('body').on('click', '[data-fancybox-delete]', (e) => {
            this.photoIdToDelete = this.getPhotoIdFromSlideShow();
            this.deleteModal.showModal();
        });
    }

    getPhotoIdFromSlideShow() {
        const src = $('.fancybox-slide--current .fancybox-image').attr('src');
        const id = $('[data-fancybox="gallery"]').find(`[src="${src}"]`).attr('id');
        return id.split('-')[1];
    }

    onInsertSuccess(data: { photos: ProductPhoto[] }) {
        this.photos.push(...data.photos);
        this.wordFoto = this.photos.length > 1 ? 'Fotos' : 'Foto';
        this.wordCadastrada = this.photos.length > 1 ? 'cadastradas' : 'cadastrada';
        this.notifyMessage.success(`${this.wordFoto} ${this.wordCadastrada} com Sucesso!`);
    }

    onEditSuccess(data: ProductPhoto) {
        $.fancybox.getInstance().close();
        this.editModal.hideModal();
        const index = this.photos.findIndex((photo: ProductPhoto) => {
            return photo.id == this.photoIdToEdit;
        });
        this.photos[index] = data;
        this.notifyMessage.success('Foto Substituída com Sucesso!');
    }

    onDeleteSuccess() {
        $.fancybox.getInstance().close();
        this.deleteModal.hideModal();
        const index = this.photos.findIndex((photo: ProductPhoto) => {
            return photo.id == this.photoIdToDelete;
        });
        this.photos.splice(index, 1);
        this.notifyMessage.success('Foto Excluída com Sucesso!');
    }
}
