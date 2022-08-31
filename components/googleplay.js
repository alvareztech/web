import Image from "next/image";

export default function GooglePlay({appId}) {
  return (
    <div className="text-center">
      <a href={'https://play.google.com/store/apps/details?id=' + appId}
         target="_blank"
         rel="noreferrer">
        <Image alt='Get it on Google Play'
               src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
               width={250}
               height={97}
        />
      </a>
    </div>
  )
}
