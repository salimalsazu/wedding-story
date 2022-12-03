import { useEffect } from "react";

//Dynamic title 

const useTitle = (title) => {

    useEffect(() => {

        document.title = `${title} - Wedding story`

    }, [title])

};

export default useTitle;