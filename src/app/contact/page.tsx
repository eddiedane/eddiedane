import MessageForm from '@/components/message-form';

export default function ContactPage() {
  return (
    <main className='flex justify-center items-center bg-stone-100 dark:bg-stone-900 min-h-screen'>
      <MessageForm className='w-full max-w-md sm:border-4 sm:border-stone-400 sm:dark:border-stone-600 sm:p-8 sm:rounded-lg' />
    </main>
  );
}
