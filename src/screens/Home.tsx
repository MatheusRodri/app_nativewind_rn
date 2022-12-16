import {View,Text} from "react-native";
import {Feather} from '@expo/vector-icons'

import colors from "tailwindcss/colors";
import {Button} from "../components/button";

export function Home(){
    return(
        <View className="flex-1 bg-black items-center justify-center p-5">
            <Feather name={"home"} size={24} color={colors.green[500]}/>
            <Text className="text-white text-2xl font-bold mt-4">
                NativeWind
            </Text>
            <Button className={"w-full mt-8"}/>

        </View>
    )
}
