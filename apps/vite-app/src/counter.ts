// @ts-ignore
import {isBoolean} from "@giscience/geoprompt";

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    if(isBoolean('count > 2')) {
      element.innerHTML = `count is ${counter} and isBoolean`
    }
    else {
      element.innerHTML = `count is ${counter}`
    }
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
