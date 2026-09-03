export function AnnouncementBar() {
  const message =
    "NEW DROP: BLUE FLAME TEE NOW AVAILABLE  •  LIMITED STOCK  •  THE_ORIGIN_DROP COLLECTION LIVE  •  FREE SHIPPING AUSTRALIA-WIDE ON ORDERS OVER A$100  •  ";

  return (
    <div className="overflow-hidden bg-signal py-2 text-white">
      <div className="marquee whitespace-nowrap font-mono text-[9px] font-bold uppercase tracking-[0.24em]">
        <span>{message.repeat(3)}</span>
      </div>
    </div>
  );
}
