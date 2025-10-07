import {Button} from "@/components/ui/button.tsx";

const BtnDecrementIncrement = () => {
    return (
        <div className='bg-primary rounded-full py-3 px-7 flex item-center justify-between min-w-40'>
            <Button size={'icon'}
                    className='size-5 border border-white rounded-full group hover:bg-white'
                    aria-label='decrement quantity'>
                <svg
                    className='size-3'
                    xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none"
                    viewBox="0 0 10 2">
                    <path
                        className='fill-white group-hover:fill-primary'
                        fill="#fff" d="M0 .375h10v1.25H0V.375Z"/>
                </svg>
            </Button>
            <span className='text-preset-4-bold text-white' aria-label='quantity'>1</span>
            <Button size={'icon'}
                    className='size-5 border border-white rounded-full group hover:bg-white'
                    aria-label='increment quantity'>
                <svg
                    className='size-3'
                    xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none"
                    viewBox="0 0 10 10">
                    <path
                        className='fill-white group-hover:fill-primary'
                        fill="#fff"
                        d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
                </svg>
            </Button>

        </div>
    )
}
export default BtnDecrementIncrement
