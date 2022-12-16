import {View, Text, TextInput} from "react-native";
import {Feather} from '@expo/vector-icons'

import colors from "tailwindcss/colors";
import {Button} from "../components/button";
import {ToggleTheme} from "../components/ToggleTheme";

export function Home(){
    return(
        <View className="flex-1 dark:bg-black light:bg-white items-center justify-center p-5">
            <ToggleTheme/>
            <Feather name={"home"} size={24} color={colors.green[500]}/>
            <Text  className="dark:text-white light:text-black text-2xl font-bold my-4">
                NativeWind
            </Text>
            
            <TextInput
                className={"mb-4 w-full h-14 border-2  dark:bg-black light:bg-whitee border-solid rounded-md text-white px-4 focus:border-orange-400"}/>
            <TextInput
                className={"w-full h-14 border-2  dark:bg-black light:bg-white border-solid rounded-md text-white px-4 focus:border-orange-400"}/>
            <Button className={"w-full mt-8"}/>

        </View>
    )
}
