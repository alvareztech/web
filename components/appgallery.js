import Image from "next/image";

export default function AppGallery({ appId }) {
  return (
    <div className="text-center">
      <a href={`https://appgallery.cloud.huawei.com/ag/n/app/${appId}?channelId=ALVAREZ.tech&detailType=0&v=&callType=AGDLINK&installType=0000`}
        target="_blank"
        rel="noreferrer">
        <Image alt='Get it on Google Play'
          src='/images/appgallery.png'
          width={221}
          height={70}
        />
      </a>
    </div>
  )
}
