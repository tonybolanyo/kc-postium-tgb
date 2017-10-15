import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {
  /*=========================================================================|
  | Broken White Path                                                        |
  |==========================================================================|
  | Componente creado para habilitar la edición de posts.                    |
  |=========================================================================*/

  // mantiene los datos del post que se está editando
  post: Post;

  // inyectamos activatedRoute para poder retomar los datos del post a editar
  // inyectamos postService para guardar el post editado a través del servicio
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _postService: PostService,
    private _router: Router
  ) { }

  // Al inicializar el componente es necesario suscribirse a los datos
  // de la ruta activa, que es la que tiene la información del post a editar
  ngOnInit() {
    this._activatedRoute
      .data
      .subscribe((data: { post: Post }) => {
        this.post = data.post;
      });
  }

  // Este manejador de evento es el encargado de realizar el guardado de los datos
  // a través del servicio PostService. Al acabar la operación de guardado vuelve
  // al listado de posts.
  savePost(post: Post): void {
    this._postService.updatePost(post).subscribe(() => {
      this._router.navigate(['/']);
    });
  }
}
