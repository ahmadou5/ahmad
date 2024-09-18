/* eslint-disable @next/next/no-img-element */
interface Props {
  title?: string
  subTitle?: string
  image?: string
}

const PlaceHolder = ({ image, subTitle, title }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center py-0 w-full min-h-[400px]'>
      <slot name='image'> </slot>
      {title && <p className='text-lg text-slate-500'>{title}</p>}
      {subTitle && (
        <p
          v-if='subtitle'
          className='text-sm mb-3 text-center font-medium text-slate-600 max-w-[600px]'
        >
          {subTitle}
        </p>
      )}

      {image && (
        <img
          src={image}
          alt={title}
          className='max-w-[280px] md:max-w-[340px] mb-[12px]'
        />
      )}
    </div>
  )
}

export default PlaceHolder

{
  /* <style lang="postcss" scoped>
img {
  display: block;
  max-width: 340px;
  margin: 0 auto 12px;
}

@media (max-width: 767px) {
  img {
    max-width: 280px;
  }
}
</style> */
}
