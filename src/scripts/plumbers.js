import { getRequests, getPlumbers } from "./dataAccess.js";

export const plumberSelect = (id) => {
    const plumbers = getPlumbers()
    const request = getRequests()
    let plumberHTML = 
    `<select class="plumbers" id="plumbers">
    <option value="0">Choose your Plumber</option>
    ${
        plumbers.map(
            plumber => {
                return `<option value="${id}--${plumber.id}">${plumber.name}</option>`
            }
        ).join("")
    }
</select>`

return plumberHTML
}