import {CardContent} from "@/components/ui/card.tsx";
import EmptyIllustrationIcon from '@/assets/images/illustration-empty-cart.svg'

function CartEmpty() {
    return (
        <CardContent>
            <img
                className='mx-auto'
                src={EmptyIllustrationIcon} alt="" width={128} height={128}/>
            <p className=' my-4 text-preset-4-bold text-muted text-center'>Your added items will appear here</p>
        </CardContent>
    )
}

export default CartEmpty
