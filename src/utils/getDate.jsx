const months = ["January", "February", "March", "April","May", "June", "July", "August", "September", "October", "November", "December"]


export const getDate = (str) => {
        const date = new Date(str)
        const day = date.toLocaleDateString('en-GB', {day: 'numeric'})
        const month = date.toLocaleDateString('en-GB', { month: 'long' })
        const year = date.toLocaleDateString('en-GB', { year: 'numeric' })
// console.log(`${day} ${month}, ${year} year`);
        return `${day} ${month}, ${year} year`
}
 
getDate()

export const getAllMonths = () => {
const month = new Date().getMonth();
const firstPartOfMonth = [...months].slice(month)
const seconfParetOfMonth = [...months].slice(0, month)
        
 return [...firstPartOfMonth, ...seconfParetOfMonth]
}
