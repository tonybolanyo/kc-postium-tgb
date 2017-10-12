import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Post } from '../post';
import { User } from '../user';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() post: Post;

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | este atributo debe permitir la emisión de eventos; la idea es enviar al  |
  | componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que |
  | dicho clic se realiza en el template de este componente, necesitas,      |
  | además, un manejador para el mismo.                                      |
  |=========================================================================*/

  // Emisor de eventos que permite notificar cuando se ha hecho click
  // sobre el nombre del autor de un post. En la emisión se envía la
  // información del autor.
  @Output() autorClickado = new EventEmitter<User>();

  /*=========================================================================|
  | Green Path                                                               |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | este atributo debe permitir la emisión de eventos; la idea es enviar al  |
  | componente padre el post sobre el cuál se ha hecho clic. Y puesto que    |
  | dicho clic se realiza en el template de este componente, necesitas,      |
  | además, un manejador para el mismo.                                      |
  |=========================================================================*/

  // Este emisor de eventos permite notificar cuando
  // se ha hecho click sobre un post. Contiene la información
  // del post que ha sido clickado.
  @Output() postClickado = new EventEmitter<Post>();

  // Este método se ejecuta cuando se realiza el click sobre un post en la plantilla
  // y se encarga de emitir el evento de notificación.
  notificarPostClickado(post: Post): void {
    this.postClickado.emit(post);

  }

  /* Red path */
  // Este método se ejecuta cuando se realiza click sobre el autor de un post en la plantilla
  // y se encarga de emitir el evento de notificacion a todos los suscriptores
  notificarAutorClickado(user: User): void {
    this.autorClickado.emit(user);
  }

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, '</p><p>')}</p>` : '';
  }

}
