import { Observer, Subscription, filter, map } from "rxjs";
import { StorageService, getArray } from "./index";
import { Post } from "./post";

const obs = getArray()
const observerObject: Observer<Post[]> = {
    next: (resp) => {
        console.log(resp)
    },
    error: (e: Error) => { console.log(e.message) },
    complete: () => {
        //what to do next???
    }
}
const sub: Subscription =
    obs.subscribe(observerObject)
console.log('fetching data')
//sub.unsubscribe()

//in one file
StorageService.instantiate().publishValue('first data')

//another file
StorageService.instantiate().repository.subscribe(
    (data) => console.log(data)
)