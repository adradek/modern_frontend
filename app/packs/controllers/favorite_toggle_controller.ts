import { Controller } from "@hotwired/stimulus"

export default class FavoriteToggleController extends Controller {
  static targets = ["elementToHide", "elementWithText"]
  elementToHideTarget: HTMLElement
  elementWithTextTarget: HTMLElement

  static values = { visible: Boolean }
  visibleValue: boolean

  static classes = ["hidden"]
  hiddenClass: string

  toggle(): void {
    this.flipState()
  }

  flipState(): void {
    this.visibleValue = !this.visibleValue
  }

  visibleValueChanged(): void {
    this.updateHiddenClass()
    this.updateText()
  }

  updateHiddenClass(): void {
    this.elementToHideTarget.classList.toggle(this.hiddenClass, !this.visibleValue)
  }

  updateText(): void {
    this.elementWithTextTarget.innerText = this.visibleValue ? "Hide" : "Show"
  }
}
