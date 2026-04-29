import { GiftingSteps } from '@/components/send-fuel/GiftingSteps';
import { WhatsAppShareButton } from '@/components/shared/WhatsAppShareButton';
export default function SendFuelPage(){return <main className='container-page py-10'><h1 className='text-3xl font-semibold'>Send Fuel</h1><p className='mt-2'>Gift fuel to family in Zimbabwe from anywhere in the world.</p><div className='mt-4'><GiftingSteps/></div><div className='mt-6'><WhatsAppShareButton/></div></main>}
