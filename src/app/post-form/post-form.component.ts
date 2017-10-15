import { Component, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Post } from '../post';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnChanges {

  postForm: FormGroup;

  @Output() postSubmitted: EventEmitter<Post> = new EventEmitter();

  // Para reutilizar el formulario es necesario que podamos establecer
  // el valor del post a editar. Para eso el componente padre debe poder
  // enviarle los datos al componente formulario. Para esto creo un atributo
  // en la clase decorado con Input. Este atributo estará enlazado en
  // el template del padre al crear el componente del formulario.
  @Input() post: Post;

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder,) {
      this.createForm();
    }

  private createForm() {

    /*=========================================================================|
    | Purple Path                                                              |
    |==========================================================================|
    | Define para este FormGroup los objetos FormControl correspondientes a    |
    | las propiedades 'title', 'intro' y 'body' de los posts. Los dos primeros |
    | son obligatorios, así que recuerda añadir el validador oportuno.         |
    |=========================================================================*/

    this.postForm = this._formBuilder.group({
      title: ['', Validators.required],
      intro: ['', Validators.required],
      body: ''
    });
  }

  emitPostSubmitted(): void {
    /*=========================================================================|
    | Broken White Path                                                        |
    |==========================================================================|
    | Debemos tratar diferente la creación de un post o la edición.            |
    |=========================================================================*/
    const post: Post = this.postForm.value;
    if (this.post) {
      // solamente si estamos editando tendremos datos
      // en el atributo post, debemos usarlos
      post.id = this.post.id;
      post.likes = this.post.likes;
      post.categories = this.post.categories;
      post.author = this.post.author;
    } else {
      // si es un nuevo post, this.post será undefined
      post.likes = [];
      post.categories = [];
      post.author = this._userService.getDefaultUser();
    }
    post.publicationDate = Date.now();
    this.postSubmitted.emit(post);
  }

  // Necesario al implementar 'OnChanges'. Este evento nos permite
  // capturar los cambios en post y establecer correctamente el
  // valor de los campos del formulario con los datos del post
  // que está siendo editado.
  ngOnChanges() {
    this.postForm.reset({
      title: this.post.title,
      intro: this.post.intro,
      body: this.post.body
    });
  }

}
