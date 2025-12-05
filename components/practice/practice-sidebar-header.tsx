import { Header } from '../common/sidebar'
import Image from 'next/image'
import { Separator } from '../ui/separator'

const PracticeHeader = () => {
    return (
        <Header className="space-y-5 flex flex-col justify-center items-center">
            <div className='flex gap-1 justify-center items-center py-4'>
                <div className='w-11 h-11 relative '>
                    <Image 
                        src={"/logo.png"}
                        fill
                        alt="logo"
                        className=''
                    />
                </div>
                <div className=' text-slate-300 flex flex-col justify-center'>
                    <h1 className='text-lg tracking-widest font-semibold leading-tight'>EXAMAZE</h1>
                    <p className='text-[10px] leading-tight'>From Practice To Perfection</p>
                </div>
            </div>
            <div className='space-y-8 w-full flex flex-col justify-center p-1'>
                <h2 className='text-white/50 text-xs'>FREE</h2>
                <div className='flex gap-2 items-center'>
                    <div className='w-[11px] h-[11px] border-3 border-white rounded-full'></div>
                    <h3 className='text-[11px] text-slate-300 cursor-pointer'>Free Practice</h3>
                </div>

                <Separator className='bg-white/20'/>
            </div>
        </Header>
    )
}

export default PracticeHeader
