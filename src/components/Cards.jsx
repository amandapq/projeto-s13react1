import { Subtitle } from "./Subtitle"
import { Text } from "./Text"
import { Image } from "./Image"

export function Cards() {
    return (
        <div>
            <div>
                <Subtitle texto="Aprendizado"/>
            </div>

            <Text
            content="O que foi aprendido nessa semana"
            />

            <Image link="https://giphy.com/embed/xUNd9AWlNxNgnxiIxO"/>
        </div>
    )
}