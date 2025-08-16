export const createSlug = (name) => {
    return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") //replace spaces and symbols with hyphen
    .replace(/(^-|-$)+/g, "-") //trim leading/ trailing hyphens
}