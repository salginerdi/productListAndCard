function TableOrder() {
    return (
        <table className='bg-(--clr-rose-50) rounded-lg'>
            <tbody>
            <tr className='flex items-center justify-between mb-4 pb-4 border-b border-(--clr-rose-100)'>
                <td className='flex gap-4'>
                    <img className='rounded-lg'
                         src="/images/image-tiramisu-thumbnail.jpg" alt="tiramisu thumbnail" width={48}
                         height={48}/>
                    <div>
                        <h3 className='text-preset-4-bold'>
                            Classic Tiramisu
                        </h3>
                        <div className='flex items-center gap-2'>
                                     <span className='text-primary text-preset-4-bold'>
                                            1x
                                     </span>
                            <span className='text-muted text-preset-4'>
                                        @ $5.50
                                    </span>
                        </div>
                    </div>
                </td>
                <td className='text-preset-3'>$ 5.50</td>
            </tr>
            <tr className='flex items-center justify-between mb-4 pb-4 border-b border-(--clr-rose-100)'>
                <td className='flex gap-4'>
                    <img className='rounded-lg'
                         src="/images/image-tiramisu-thumbnail.jpg" alt="tiramisu thumbnail" width={48}
                         height={48}/>
                    <div>
                        <h3 className='text-preset-4-bold'>
                            Vanilla Bean Creme Brulee
                        </h3>
                        <div className='flex items-center gap-2'>
                                     <span className='text-primary text-preset-4-bold'>
                                            4x
                                     </span>
                            <span className='text-muted text-preset-4'>
                                        @ $7.00
                                    </span>
                        </div>
                    </div>
                </td>
                <td className='text-preset-3'>$ 28.00</td>
            </tr>
            <tr className='flex items-center justify-between mb-4 pb-4 border-b border-(--clr-rose-100)'>
                <td className='flex gap-4'>
                    <img className='rounded-lg'
                         src="/images/image-tiramisu-thumbnail.jpg" alt="tiramisu thumbnail" width={48}
                         height={48}/>
                    <div>
                        <h3 className='text-preset-4-bold'>
                            Vanilla Panna Cotta
                        </h3>
                        <div className='flex items-center gap-2'>
                                     <span className='text-primary text-preset-4-bold'>
                                            2x
                                     </span>
                            <span className='text-muted text-preset-4'>
                                        @ $6.50
                                    </span>
                        </div>
                    </div>
                </td>
                <td className='text-preset-3'>$ 13.00</td>
            </tr>
            </tbody>
        </table>
    )
}

export default TableOrder
