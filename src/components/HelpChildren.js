import DonateWidget from "./DonateWidget";
export default function HelpChildren() {
  return (
    <div className="help-section">
      <h2>HELP CHILDREN GET THE FUTURE THEY DESERVE</h2>
      <div className="post-row">
        <DonateWidget
          text={`Donate to children in crises`}
          gridArea={`side`}
          imageLink={`https://www.savethechildren.org.uk/content/dam/global/images/countries/united-kingdom/ceasefire-now-projection-orig.jpg/jcr:content/renditions/cq5dam.webp_thumbnail.993.993.webp`}
        />
         <DonateWidget
          text={`Global food crises`}
          gridArea={`bottom`}
          imageLink={`https://www.savethechildren.org.uk/content/dam/global/images/countries/somalia/ubah-somalia-ch1696362-orig.jpg/jcr:content/renditions/cq5dam.webp_thumbnail.768.768.webp`}
        />
         <DonateWidget
          text={`donate`}
          gridArea={`top`}
          imageLink={`https://www.savethechildren.org.uk/content/dam/global/images/countries/somalia/fatima-somalia-ch135781-orig.jpg/jcr:content/renditions/cq5dam.thumbnail.768.768.jpg`}
        />
      </div>
    </div>
  );
}
