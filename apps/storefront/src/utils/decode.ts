/**
 * decode text that contain special characters
 */
export const decode = (text: string) => {
    if(window){
        const parsed = new DOMParser().parseFromString(text, "text/html");

        return parsed.documentElement.textContent;
    }
}
