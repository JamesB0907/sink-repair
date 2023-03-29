import { getRequests, saveCompletion, sendRequest } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"
import { plumberSelect } from "./plumbers.js"
import { getPlumbers } from "./dataAccess.js"

const plumbers = getPlumbers()
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(request => {
                    return `
                    <li> 
                    ${request.description}
                    <button class="request__delete"
                            id="request--${request.id}">
                        Delete
                        </button>
                        ${plumberSelect(request.id)}
                    </li>
                    `
                }).join("")
            }
        </ul>
    `

    return html
}

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")
            const completion = { 
                requestId: requestId,
                plumberId: plumberId,
                date_created: new Date()
            }
saveCompletion(completion)
        }
    }
)