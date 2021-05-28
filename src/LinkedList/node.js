export class DataNode {
  prev = null
  next = null
  data = ""

  constructor(data) {
    this.data = data
  }

  GetNext() {
    return this.next
  }

  GetPrev() {
    return this.prev
  }
}