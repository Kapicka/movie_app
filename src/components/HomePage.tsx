import React from 'react';
import ListComponent from "./ListComponent";
import {useNavigate} from "react-router-dom";

type Prop = {
    className?: string
}
const HomePage = ({className = ''}: Prop) => {
    const navigate = useNavigate()
    const handleItemClicked = (itemId: number) => {
        if (itemId === 1) {
            navigate('/series')
        }
        if (itemId === 2) {
            navigate('/movies')
        }

    }

    const listItems = [
        {
            id: 1,
            title: "Popular series",
            img: require('../assets/movie_bg.png'),
            coverText: "SERIES"
        },
        {
            id: 2,
            title: "Popular movies",
            img: require('../assets/movie_bg.png'),
            coverText: "MOVIES"
        }
    ]
    return <ListComponent className="blo" title="Popular titles" items={listItems}
                          onItemClick={handleItemClicked}/>

}
export default HomePage
