import { CalendarIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import type { MetaFunction } from '@remix-run/node'
import { format } from 'date-fns'
import id from 'date-fns/locale/id/index.js'
import { useForm } from 'react-hook-form'
import { Button, buttonVariants } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import { cn } from '~/lib/utils'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  const form = useForm({
    mode: 'onChange',
  })

  return (
    <>
      <Form {...form}>
        <FormField
          control={form.control}
          name="nama"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Anak</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sex"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jenis Kelamin</FormLabel>
              <div className="relative w-max">
                <FormControl>
                  <select
                    className={cn(
                      buttonVariants({ variant: 'outline' }),
                      'w-[200px] appearance-none bg-transparent font-normal'
                    )}
                    {...field}
                  >
                    <option>Pilih</option>
                    <option value="0">Laki-laki</option>
                    <option value="1">Perempuan</option>
                  </select>
                </FormControl>
                <ChevronDownIcon className="absolute right-3 top-2.5 h-4 w-4 opacity-50" />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Tanggal Lahir</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP', { locale: id })
                      ) : (
                        <span>Pilih tanggal</span>
                      )}
                      <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dow"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Tanggal Penimbangan</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP', { locale: id })
                      ) : (
                        <span>Pilih tanggal</span>
                      )}
                      <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="posisi"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Posisi</FormLabel>
              <div className="relative w-max">
                <FormControl>
                  <select
                    className={cn(
                      buttonVariants({ variant: 'outline' }),
                      'w-[200px] appearance-none bg-transparent font-normal'
                    )}
                    {...field}
                  >
                    <option>Pilih</option>
                    <option value="0">Berbaring</option>
                    <option value="1">Berdiri</option>
                  </select>
                </FormControl>
                <ChevronDownIcon className="absolute right-3 top-2.5 h-4 w-4 opacity-50" />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="berat_badan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Berat Badan</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="panjang"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Panjang / Tinggi Badan</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>

      <div className="overflow-hidden shadow bg-grey-50 sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium leading-6 text-gray-900">Hasil</h2>
        </div>

        <div className="px-4 py-5 border-t border-gray-200 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            {form.getValues('nama') && (
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Nama</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {form.getValues('nama')}
                </dd>
              </div>
            )}
            {form.getValues('sex') && (
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Jenis Kelamin
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {form.getValues('sex') === '0' ? 'Laki-laki' : 'Perempuan'}
                </dd>
              </div>
            )}
            {form.getValues('dob') && (
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Tanggal Lahir
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {format(form.getValues('dob'), 'PPP', { locale: id })}
                </dd>
              </div>
            )}
            {form.getValues('dow') && (
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Tanggal Penimbangan
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {format(form.getValues('dow'), 'PPP', { locale: id })}
                </dd>
              </div>
            )}
            {form.getValues('berat_badan') && (
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Berat Badan
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {form.getValues('berat_badan')}
                </dd>
              </div>
            )}
            {form.getValues('panjang') && (
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Panjang / Tinggi Badan
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {form.getValues('panjang')}
                </dd>
              </div>
            )}
            {form.getValues('posisi') && (
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Posisi</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {form.getValues('posisi') === '0' ? 'Berbaring' : 'Berdiri'}
                </dd>
              </div>
            )}
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Hasil</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                Belum tau wkowko, belum bisa ngitung
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}
