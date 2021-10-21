import { Controller } from "@hotwired/stimulus"

export default class TextController extends Controller {
  static targets = ["elementWithText"]
  elementWithTextTarget: HTMLElement

  static values = { status: Boolean, on: String, off: String }
  statusValue: boolean
  onValue: string
  offValue: string

  toggle(): void {
    this.flipState()
  }

  flipState(): void {
    this.statusValue = !this.statusValue
  }

  statusValueChanged(): void {
    this.updateText()
  }

  updateText(): void {
    this.elementWithTextTarget.innerText = this.statusValue ? this.onValue : this.offValue
  }
}
