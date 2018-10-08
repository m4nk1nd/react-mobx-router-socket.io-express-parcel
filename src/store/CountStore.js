import { observable, action } from 'mobx'

const CountStore = observable(
  {
    count: 1,
    inc() {
      this.count++
    },
    dec() {
      this.count--
    }
  },
  {
    count: observable,
    inc: action.bound,
    dec: action.bound
  }
)

export {
  CountStore
}