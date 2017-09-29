import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent {

  // inyectamos el Router como dependencia para
  // poder navegar a otras páginas
  constructor(private _router: Router) { }

  @Input() posts: Post[];

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Maneja el evento del componente PostPreviewComponent que indica la       |
  | selección del autor de un post y navega a la dirección correspondiente.  |
  | Recuerda que para hacer esto necesitas inyectar como dependencia el      |
  | Router de la app. La ruta a navegar es '/posts/users', pasando como      |
  | parámetro el identificador del autor.                                    |
  |=========================================================================*/

  /*=========================================================================|
  | Green Path                                                               |
  |==========================================================================|
  | Maneja el evento del componente PostPreviewComponent que indica la       |
  | selección de un post y navega a la dirección correspondiente. Recuerda   |
  | que para hacer esto necesitas inyectar como dependencia el Router de la  |
  | app. La ruta a navegar es '/posts', pasando como parámetro el            |
  | identificador del post.                                                  |
  |=========================================================================*/
  mostrarPost(post: Post): void {
    // navigate permite nevegar a una ruta definida
    // como la ruta está parametrizada, en el vector
    // con los parámetros incluimos primero la ruta
    // y luego, como parámetro de la ruta, el ID del post
    this._router.navigate(['posts', post.id]);
  }
}
