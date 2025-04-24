export const fetcher = ( ...args: Parameters<typeof fetch> ) => fetch(...args).then((res) => res.json())

export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const generateTrimmedText = (text, maxSymbols) => {
    return text.length > maxSymbols ? text?.slice(maxSymbols) : text
}