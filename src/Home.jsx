const Home = () => {
  return (
    <div>
      <div class="container">
        <div class="loa"> LYCEUM OF ALABANG</div>
        <div class="container">
          <div class="row">
            <br />
            <div class="col-sm-12 col-md-4">
              <div class="container1" style={{ backgroundColor: "#EAEAEA" }}>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/008/012/999/small/human-brain-in-head-outline-icon-with-editable-strokes-isolated-on-white-background-free-vector.jpg"
                  className="philoImg"
                />
                <p className="philoname"> PHILOSOPHY </p>
                <p className="philoinfo">
                  An institution that provides quality and relevant instruction
                  and innovation for the next generation to improve the lives of
                  individuals; physically, emotionally, morally, and spiritually
                  adhere to the principle of God.
                </p>
              </div>
            </div>
            <div class="col-sm-12 col-md-4">
              <div class="container1" style={{ backgroundColor: "#EAEAEA" }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqHX4jKEgRnuvcsl5UYKVT6XS-9D05SeFOg&s"
                  className="philoImg"
                />
                <p className="philoname"> VISION </p>
                <p className="philoinfo">
                  Lyceum of Alabang envisions becoming one of the nation’s
                  leading educational institutions involved in the pursuit and
                  advancement of knowledge, skills, and values for personal,
                  community and national development
                </p>
              </div>
            </div>
            <div class="col-sm-12 col-md-4">
              <div class="container1" style={{ backgroundColor: "#EAEAEA" }}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAAD7+/v5+fnw8PBvb29mZmbk5OTt7e2IiIj19fVsbGzg4OCrq6vU1NTq6ura2tq+vr6cnJy4uLhXV1d3d3fKysqUlJSoqKgoKChgYGDBwcFLS0s6OjowMDANDQ0hISFEREQrKys4ODgZGRl/f3+goKCPj49QUFALCwsiIiIWFhZ6enoIwyNaAAAUWklEQVR4nO1dZ3vCOAwuCRACWRAIe4RN6f//fQdtI9mylYUpd/fwfmoDOJatbdn++HjjjTfeeOONN95444033uDgxH746j48E9ah0Whc3Fd343mwZ41vnF7dkWfBbv8Q2Lh0Xt2V58DKCGw0klf35SmwhkBgY/7qzjwDNs5goxG8ujdPgERgI3p1d8zDmokENrxX98c4RBm8w3l1h0xDZtFGY/1/sxaUwMam++oumQWRwRtW1qv7ZBS2QmBj+eo+GYXCojcsXt0po+ipBDaGr+6USRwFwtL17x/tV/fKJJZIYCvO/hq9ulcGESKBsw+g8P8UAjtAYNv+mGR/D17dLYOIMqLO9sfHIPvHf3W3DCIQRW+c/dN/ca863tw/ntxRbzaczdrtXmvkHvuB06njiCQZUYfbP272jxDiW92O40XBPPkbVzVM/MNwl+l0gvX27Pajih4lKJd78qmV/XNM+v7AHbWHi+Vq8/u6y+nJrpwdxYf0oqdNxObsxhUSnpJyUd03Cc/UsI7f2xUTB7gOx0nJuQTRm9z+ORe0+6xUsTMZMnyZh23bb5ZoHEQvvolcWtDmU1Ssc1xUp+4Xl1FiF7X/lX15fhOEVUGDsXHyrKRVQvLysBwX5JTA776pT3tT0Jrp3EZzUn/6EJdZbu4TlEtUzKUHs/Q5h70B+r5xzjHgoFzu83PMa6UxM2otQjfnVZ+Lnjvw4yTyHMfzvChK/MGhNVzy+iiNGYGEabvc9WSXJqTEf9qFMl0BzcGnvqfr9DCZe039YHad+aC3YwQ31WuJbmaE9t8uS3eQfq7S86zljgeTOE6FBkwSaE20Om1zM3JhIaNYTv+gN51DXZa3Of39dPtrWizbhne0xF8bZNFkqene7lCs+BGe355qGnFVAxlmwr5UmpcSVG1zBIYjtWdLtwp5P2jGbVUsVwqrQniY0k+kBJVBFvXVse/Na6ZnvYHKDW0yjV72wT33dAsjQie6Od3HsTsSPbiZMQKjIe3RavyIlbUSJVM4lDsL4eG2Nzunq41WT5mTwYnSdPxw2xH1imTfcq6jiM67KQKbX6Tl9HH67ogOUqs96cN+CQJNsaiXyg2vfGPM74naS0r2Wrp0sAxjMti/Su1eB0ZXfxIcvrHwuAyBplh0LLfbM+3FW5NfJb0VWrY0KxYEpljUkkVQNVsGEH6LYyqUINgtLVHSSBsikCxvfZWJzWvAm0zmAs9ZhQQuj4be3JHSI7sKxTqW3ezUHWWVRffT3c3p7n25N6c7CSLHWPrQSSXGL55Aq5P4R7c1THfbz/31FgsMe6dJP6hGq6Rkev154Dlhs/uUfGEk+WmDgnfY0fFroQ+N94uvY1B23CUZ7D01ERqJVmKaX2wVxqOinOJ+Vqo6VJ7BpxLoiTN4zpuB0FecVgbnY5GtkWSw9VQCQ3FORryRt/q9Klmbda+fJ84Si7ZMJicUdFPhVXzVqhVXT7qtTiy3SmbCYGirgS3y3YT9lq8L+ouxdvU0SjL4XBb9EJ1+zo2x4nr03XFxNYL9lwSKviiX0ZznLJZstqtlmu6mmyv7lVTJPsky+FwCxdCMWfIIGdd4NRvHide1vjtoNcOgP2jpp3pGWvxDGfzwhJFn/D9fk1PYzAaMWW8Gk5aa5ZGXLWQzYZok0h9BPepXHh11AleHgrXm5twlcymVM9t/KIOilulpv9BX0t7tuEzQ0U1GoukU59D6O1dNEsJU22+6brF3ywfFTbQvOzFc+jtX7aZCMFv7qbNaDvHQVsdqMaPlp9+/2wpTKMngSCDQGQ973MpNbQijqXO2g61E33pcPSbu+rPtaiTMO2smfl42NBt2x/guXX1VIItgr2bhvC3OiyyD4gc/s222HDFEpa5LZSUSfSsj21d4MwE5YZPJIUxfbjTqQ05Da9aLakBSMiNpVCHRvjLHp8IcacZNInBjZodVnquGSwnmCoLQ1mu8ikDoS2NopkQn10xg+aWxjTKoZqYqAZHoqLlmbBZrJn6Avoeh6m4h6lV51BPXtw1VIEksqhIo6j0zysaH9qjff3NGUqEzxTWedvOGogxgsauGkpiasPtd9IxVthc6c83dAdiNYneWrjY3bHeLthuzacQSAa9QKGRiEnEK1QojcYWUJ9CKJkO1PGt9HusURYEM/gCVu7KaXx0WJNeuiikMhNICdjCdIxv1X8bKt4tk8BdooB8vf0ZFqnRHTLxxSyJBK7cOk44L66oRQL1C41yftF+ALVQthdAbxvYGBTW8lMlkFs3rFlqMR31E5HhlCgVfRh+7hfJ6vBaSvslx1SjQDKsKvhpgnpSo0EIdO9U6iLGuyongUySjUlYNvnt5bI+zB1Kk8KFQ+KjzRZvF67UN2QuUzYT4QRSoVMDGEpW5KgH2pCjVtg7qf52WCbQTeNlPdzuhyGcj2AtWBqO7Np8pihy+rha4VQCaVkWvoYzpVF5f0aDTmesHYafZ7XbC6Lfo8syt0Uspi5/0QUo9BNQQj4QzAdsKMslFY7fRS/jBtaUsLdlOIP5QMhNSBJOZPiomqAce2ZkHFRcplXs0uRoxILXJafEuA1mLip9AOf6FqjqQoEv9SNgCYaJkYIy2UqVAnsFhCYOVYyZwwwGdRNSC9WMaZHWqyzA5qnprUuXZp18iZMx11UCjrOkkwif1c1JAx5m8tQNJajUGTcSQuF0mK8zL4B3IEXRFFhxKvT0uARtkmdoDNCIKCwrhaWNdin0KXDX0fmnmCUq+a2tTdG+JusSQcaHwoJD7npZ6sV3kquEk0jgChqau0Yem6XZ+lE9FCnF2G6tSeSKJRbV6H80CtbwQnlIpKgt4NxUAsPbKaRRC4k27vKF2nzUTCBjpNZFqj/ugJLqwFhFwH9BiBRuD3U2pY41KRfRN0GtUH4AlqZfMALdlT8pmMGyiQydkNcrJYMWInoa74JHUyw2DMqYWAbpFQ7MOeuOlZL9sRI9yTzgfTG+9SN9lemsD01BjgGqmVFhaOqJH3U3e6GS2t94BPCBTREkj95IR7YJ9WpdRoxUielBtZOQwTVYnDEanlHQXhI06S7z38YNg4E5QckvK4DdA8vckhoJBqpNyA+ea+ta4B578AiZ9q6ts8r9zWutM6/EyaKk+WBNWYImGBrmoo2pAvAlnwAZA+jZ0gTTLxHPyK1YGvdanZushN6owuXVUDfAcGR4gZEWkG7h3o06CUC/27VqzLBr8qGOqiqHtL/m5k0VQ2xpeDahSor/AiFAxhNyoyjFiJcrdlbXYrNovp9PEAfhKC1lkQMvWOa8N2IjYbmB9wjAhFIUp3ozgrH77kPziCzAI0VXN7DlVNeDo1/Db0uy3ZDhBcxPKQSR2lGHkmH+Q56rhXJE2wCKS4Wsxz0sAnE921AjlwImUSTFp9d11m2dRwYRTroPfELNwYJ6XABRB7WSFAqr0SvTJknuXtBlr1PnIc9VsTlEDo0+Y59V3y4A5JEEuiNtO/n4ze34lno4QUF3upW755ZQwHMRggAdKBJTT+CUAvDUr9xx0BE084h6wRVTsqnEmHMaJzDpY7epJU+6n8PyLeU66gA7CslNi8QX0FbFFwDok0IEBr15dC2xBBnPOPOfYBZl0XqacEnpMlGkzC8xS5vs5wRcD6TgmAUA5cTvA6yAiD5TfB79450uYKVNicyAOWMnfB+GonjOFnhFKgHJCCXdyGjyP5Vr/G4GWhkYIorfEJ8yY/VN2akxQOGCeE0q4k9PATAaC13PvkD04L1qKnQaxpc5t+vv8KhtKoLD6UjB3Xh88JxSesufE1YEcSyAti390FtnMVqNwLz8Ho1adQo5L4TlnekmfBcox3XJj0V/KaR4Q8tiUwsyhIFwKFFYvceM0DTwncwsrahPm+Qll7EYg9IyIM6yIEAqtLHFIwqQHuJQ7N5NzLjiuFpdPfr9z3/nCebGgS0lmwcrcZOJKPWAtQGhIrVfCPAfKiScA58ncfzDY33eoWWKxCBkQMJ/E7nUZe/iAT8O5SfC8xTynAoFLNTfd1Enmd7e1gzW5RJuCmHNOIWn+gSNauSbhOXE64GhYmtwQlryz/YV9LMWhcSDHvTBXZGBhRKpfUoJn+cgCAWmvqfx9i0uHdYWyxH3Pn/dPKT5QksqQCiEqmZurB6InWA4hC6w2MBiJkqBvdLlGOcRGAM0H4KInSfGCQ0Eo4bJJJQDpZFoD0WP6AIRQvW3n7AmmS8igr2iaHsaPUNLjWioB0BCE62DUiHsGqkYpC3HkLUMClPUbCK6ovoJ1NNllsmD0apTtg7tFKIG5IhKBCQiFYSJmV6yi/yBRQFm9kz0nWSPQCnWyiSDDxGKBVqNqEJJCqgPlaXfEqqlxzMoREcAcHOPSEEegFMDkE1sKEQKtb0HHWl0dDTWV0BrdkGaf0YV5GG7iT8A76+y8wGibvI1bdUM9qPGg7AmpZe9p1sNwjKjunzEfgMjUOcezk80V9fLZxCjmnHRL3N3jEKRs96VL4OLVMTTiwMVlMi4gGbUKv7jUJYw03c6BKRmm+iOMj6eRO/AD/YotSiFNK4Hs74g/nuaNaSEgqULGB4/upxMhuaCV4XyyDcNUUZ2Qpa0VC1UKR6ZZzG5TNsUQV1d0WgRMU1E5bnJVJfDCehtL4Of0DhdQbDtaeYmbDxaVS5ORR5X6H9zzQaYKfLl6BwZj4ogrRVIrh7H4ueo7E/yp4unA7LKRWb2KIfSI6O/BXiiJZsjKVA3YhKOLVtQ9wXJdIt42p2LLArpLCcFogYpbmY1COoTCNkZlPsA80fIWTsWWBpiFKdHuDvCvwoviYmH5mkhxt7vCF1jWRjXQgfugLNDO0tAEBGOjaGlxwfdQcmgTwd9R630xSUCcqBxfvyxANRJvUHCv1HkSD+ZclDIaYrJ/rTg7aCqo+whMWrP48kOYjy0dWFBC6v586UzFS3Ehuyftb1MXq5F+KqAgn/U3PIfsi9FC0ekle4Mb53x/qnOSdteo7IZ7DpZksLCejz2TqxgwVVT8hY1rqqLuyDF9j6exOZC/qlG/uOJIqefLXCsAzAJdnBcUioZFOiQzM9QeHGgFLomoNHOBZCgbuID2R26Vw1Np6OgKO7w1/kSX7h29zCZSQGGFfVc5UVHTEKoZ5VP0Ax46tBTGSckSCActaBQmvbPgjtXw637OaN8/ur1UzdxcddkyLBdTAjLQQJeHDvjFHT7K+zFU0p4Pnpcl1WGo66dw5Ah9PyzVPHgCGDKjIm6C96L1sqO0CoHae9NClFNlERt56MHTVI58Q8I+Zm3JlT0ufWHQWVuVJlyIq0S4+Jm6bacacHFMWYIURniv9+3VU/e12Bz13p1Qs6nYSZzCB4zhD3CmlEkUtuHtmIRsUrQh/6aoBszOM8HDVXjUTmFwHz5oCMNd1fAJ0aD+DLeP+yH5uZvWhz63j0AYv09FC+Ud1lEZWKelSJt4nClfz9KJe8y1TGnO3U7i0UXKi7toJg2cBY+vUtM9woFGuTF9JzktZCrXq1Hs5eiI4JrX8qDUW0sDJ1EVanFHbMH5vrYTxPerRA6ngZ9EBQspwvlwGunACFyNT+sAJ1GVBym2M3cKnrgZfKu+FL3xx85TAGBMqyl4EE/3SB87oiKDJZb2f6qmEid4a+j2P1SnupVWsaByb+I60Kbk06oECt64sRtkcUx11kcyeY8r70SyLhqXDBeANGcB1EQT41SNmytfBaEe0VENsseu4Zn8AwDrIs5tVdqN/dhtHo585ouGwCaGlXVziFogDVoXVD5MaFhX4dgDyVe/aPxxYTeK7pDK+nDwpN+Fzs06NSQcaum4WI76V7qBEjYYPexyyxDcYDW79qEcZ/I5rkqjNSeBiDbXKhThmrwb7xuCCtdmmOckGNxUOCj5hpiWMmjvXegIetaM7WUa11q9UAmUvoKSwxxOaFbqqlVXXWEYDPPoHQKD6ANei1wBdUM6KE7rd/s9JRdw1k+QsGCgFZVHIRCw00vZXL1yZT0bJLy7ajmx7v5KZkWnTDj6GARRTPVxa1N73er9tk5Pc05UPEp1X0+Z1JLgC1xNHT5L+y8sYw4Zh8njUjOX1fAeOE38+22Mh17K3VW85wRMDKhMuL9aRMJCJne/meWzlYhlMOI0sBiJGoqZdBAP7h5yCZbOoMRxgnq02b2u4sLrU7SM7kUpa9S7tS6auXzxJk50KMze1KxA3Ja943tkxcOKN5Cv8jwEUYGdn3oZ0ofsgX7mlR57FW6R33zlXT/bFGMX5XRB85DiiNwSASs4Fd1Jdse+4KKPMBW+PDV9k6QO0uWOXwUHwzjxV9rgMZ0dgwKum4v3LlyNe6NaSLO4KHyn5fWPh9lSvqRsvTqPxn5QfKCidB4Dsz5iHlI0uC8X09vNKEj6sT/x43ieBE65mwsdyZ2f/hWB5KCLRutJl3Te/BjJ89k+yVfTv1oicW/kzg4FoZy0WRhKjpZEIvtmrLP1AMhJy8/jFAbRSnr/p+mI1CMB9RN9UQ5NUm6RmnT4HXIU+PVp0UQuaEw/NHMDy00Ax6QYpVwF4BMwp0HEzASN4Zg2e/hrEUR0lMKgMqcG58Jx6fVt69dwaAZfuU91d6yv1a1EvTu997dGQoWj9klzencZWNE4VdqaPuNO86qINWmLbW44pIOnvehj9OoJ/IE+wzZtxWXdgG5w0saSC1PK+XF4I10HbzI5uoUPuS627fXHQ/3dyOrZgi9FwF72sFmMBv0gbJJdZ92Ol/jubMX9bMmWEr0MPI13XKbpsHdwT+PBYHxyR7PFLvdS692/j747vEOVq7hzsIiffCNnfYTH+vc5Z1i3/j36RQfdSlIVlFmtejnCSfWL1X8wLb3i+HKE/oxbeWGxdJP/Cnk/6MxPC/6CcYJty/eencp+BqwwObZ3BWROz24c/StNQ2l0ovlgNFTM33qbtl0/cf5bnJkDq+l4wTy+50v9uJ9ETvjfnrc33njjjTfeeOONN954g8U/RoAQ2+z9ycYAAAAASUVORK5CYII="
                  className="philoImg"
                />
                <p className="philoname"> MISSION </p>
                <p className="philoinfo">
                  Lyceum of Alabang shall provide world-class education and
                  training through competent personnel, high-end facilities,
                  advanced technology, and equipment and accredited curricula of
                  industry-based courses.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div class="container-fluid">
          <div class="policies">Policies</div>
          <ul class="policy">
            <li>
              {" "}
              We, at the Lyceum of Alabang, commit ourselves to exceed the
              expectations of our stakeholders through continual improvement for
              effective and efficient provision of quality education and
              training. We will ensure that all our academic and non-academic
              processes and activities are aligned with their voice.
            </li>
            <br />
          </ul>
          <div class="policies">Goals and Objective</div>
          <ol class="policy">
            <li>
              Impart knowledge and intellectual skills and nurture different
              qualities of mind and character such as curiosity, critical
              judgment, ethical awareness, and creative imagination.
            </li>
            <li>
              Provide quality competence development and enhancement program for
              faculty and staff to ensure optimum learning and l excellent
              service to all stakeholders
            </li>
            <li>
              Provide quality high-end facilities and equipment instrumental to
              the enhancement and advance of learning.
            </li>
            <li>
              Develop individuals who are skilled in identifying, clarifying,
              choosing, and putting into practice decisions that are relevant to
              their personal, social, and cultural development.
            </li>
          </ol>
          <div class="policies">Core Values</div>
          <ol class="policy">
            <li>
              <b> EXCELLENT AND DYNAMIC SERVICE</b>. We commit to excellence in
              the performance of our services through dynamic educational
              programs and modernization of resources for global
              competitiveness.
            </li>
            <li>
              <b> EDUCATIONAL PARTNERSHIP</b>. We enter to sustainable alliance
              with earnest parents and enthusiastic learners, creating a
              community of responsible partners in nation-building.
            </li>
            <li>
              <b> HUMAN RESOURCES DEVELOPMENT</b>. We equip and empower our
              human resources through continuous training for personal and
              professional development, creating a workforce responsive to the
              demands, changes and innovations of the modern and fast-paced
              society.
            </li>
            <li>
              <b> MORAL AND SPIRITUAL LEADERSHIP. </b> We pursue moral and
              spiritual leadership in inspiring our students to embrace our core
              values
            </li>
          </ol>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
