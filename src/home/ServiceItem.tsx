import { ReactNode } from "react"
import "./Services.css"

function ServiceItem(props: {
    [x: string]: ReactNode,
     image: string | undefined 
}) {

    return (
        <div className="service-card">
            <div className="service-img">
                <img src={props.image} alt="image" />
            </div>
            <h4 className="font-semibold mt-5 text-lg">{props.title}</h4>
            <p className="mt-5">{props.text}</p>
        </div>
    )
}

export default ServiceItem