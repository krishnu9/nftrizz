// The file is the config dir just contains consts
import { HomeConfig } from "@/types"

export const homeConfig: HomeConfig = {
    mainNav: [
        {title: "Home", href: "/", disabled: false},
        {title: "FungibleT", href: "/ft", disabled: false},
        {title: "NFT", href: "/nft", disabled: false}
    ]
}
