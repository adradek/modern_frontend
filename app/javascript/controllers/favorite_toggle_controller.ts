import { Controller } from "@hotwired/stimulus";Controller

export default class FavoriteToggleController extends Controller {
  toggle(event): void {
    console.log(event.params);
    console.log(event.params.text);
  }
}
