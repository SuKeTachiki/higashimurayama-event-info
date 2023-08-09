import Image from "next/image";

const description = "こんにちは。管理人の助です。";
export function SideBar() {
  return (
    <div className="sticky top-0">
      <div className="border-2 rounded-lg border-stone-500 bg-stone-200 mb-2">
        <h1 className="text-center mt-2">管理人情報</h1>
        <Image
          src="/profile2.png"
          alt="me"
          width="128"
          height="128"
          className="rounded-full mx-auto my-5"
        />
        <p className="w-3/4 mx-auto mb-2">
          東村山在住の26歳、一児の父
          <br />
          おちゃらけた娘（2歳）と休みをどう過ごせばいいか模索中。
          <br />
          <br />
          Instagramでもイベント情報発信しているので、そちらも是非是非お願いしますm(_
          _)m
        </p>
      </div>
    </div>
  );
}
