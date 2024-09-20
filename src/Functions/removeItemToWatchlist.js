import { toast } from "react-toastify";

export const removeItemToWatchlist = (e, id, setIsIconAdded) => {
    e.preventDefault();
    if (window.confirm("Do you really want to remove this coin from your watchlist?")) {
        let watchlist = JSON.parse(localStorage.getItem("watchlist"))
        const newList = watchlist.filter((coin) => (coin != id))
        setIsIconAdded(false)
        localStorage.setItem("watchlist", JSON.stringify(newList))
        toast.success(
            `${id.substring(0, 1).toUpperCase() + id.substring(1)} - has been removed!`, {
            position: "bottom-right"
        }
        )
        // window.location.reload()
    } else {
        toast.error(
            `${id.substring(0, 1).toUpperCase() + id.substring(1)} - could not be removed!`, {
            position: "bottom-right"
        }
        )
        setIsIconAdded(true)
    }
}