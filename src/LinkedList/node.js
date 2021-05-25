export class Node {
  prev = null
  next = null
  data = ""

  constructor(data, p, n) {
    this.prev = p
    this.next = n
    this.data = data
  }

  GetNext() {
    return this.next
  }

  GetPrev() {
    return this.prev
  }
}