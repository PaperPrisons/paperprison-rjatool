import React from "react";
import dynamic from "next/dynamic";

import GenericPage from "@/components/GenericPage";
import BackToTopButton from "@/components/BackToTopButton";
import "@fontsource/ibm-plex-sans";

const DynamicTool = dynamic(() => import("@/components/Tool"), {
  ssr: false,
});
const DynamicLayout = dynamic(() => import("@/components/Layout"), {
  ssr: false,
});

export default function App() {
  return (
    <DynamicLayout>
      <div className="inner-anchors">
        <div className="sub-nav-wrapper">
          <a href="?#tool">The Tool</a>
          <a href="?#about-the-tool">About the Tool</a>
          <a href="?#about-the-data">About the Data</a>
          <a href="?#methodology">Methodology</a>
          <a href="?#acknowledgements">Acknowledgments</a>
          <a href="?#about-the-initiative">About the Initiative</a>
        </div>
      </div>
      <DynamicTool />
      <GenericPage id="about-the-tool">
        <h2>About the Tool</h2>
        <p>
          This tool provides a way to explore racial disparities in support of
          the California Racial Justice Act (CRJA) (California Penal Code (CPC)
          section 745). Enacted in 2020 and amended in 2022, the CRJA provides a
          mechanism for defendants (and the convicted) in a particular county to
          challenge a charge, conviction, or sentence if it is sought or
          obtained in a racially disparate manner. Throughout the CRJA, racial
          disparities also encompass ethnicity and national origin.{" "}
        </p>
        <p>
          The CRJA specifically addresses four types of conduct. The first two
          forms focus on the particulars of the case at hand: first, the
          exhibition of bias or animus towards the defendant by the state, a
          witness, or juror, and, second, the use of discriminatory language
          about or exhibition of bias or animus towards the defendant in court
          (unless quoting another person). The third and fourth forms of
          conduct, which concern charging and sentencing, require “evidence that
          the prosecution more frequently sought or obtained” harsher charging,
          conviction, or sentencing outcomes against people who are of the same
          race as the defendant. This tool focuses on the latter two forms of
          conduct.
        </p>
        <p>
          To make a “pattern of disparity” claim under the CRJA requires two
          showings. First, in relevant part, CPC section 745(a)(3) states that,
          in the charging or conviction context, the defendant must be “charged
          or convicted of a more serious offense than defendants of other races,
          ethnicities, or national origins who have engaged in similar conduct
          and are similarly situated.” Second, CPC section 745(a)(3) further
          provides that “the evidence [must] establish[] that the prosecution
          more frequently sought or obtained convictions for more serious
          offenses against people who share the defendant’s race, ethnicity, or
          national origin in the county where the convictions were sought or
          obtained.” Similarly, in the context of sentencing, CPC section
          745(a)(4) states that a defendant must first show that “a longer or
          more severe sentence was imposed on the defendant than was imposed on
          other similarly situated individuals convicted of the same offense,”
          then show either that “longer or more severe sentences were more
          frequently imposed for that offense on people that share the
          defendant’s race, ethnicity, or national origin than on defendants of
          other races, ethnicities, or national origins in the county where the
          sentence was imposed” or that “longer or more severe sentences were
          more frequently imposed for the same offense on defendants in cases
          with victims of one race, ethnicity, or national origin than in cases
          with victims of other races, ethnicities, or national origins, in the
          county where the sentence was imposed.”{" "}
        </p>
        <p>
          CPC section 745(c)(1) provides that “[i]f a motion is filed in the
          trial court and the defendant makes a prima facie showing of a
          violation of subdivision (a), the trial court shall hold a hearing.”
          Furthermore, “evidence may be presented by either party [at the
          hearing], including, but not limited to, statistical evidence,
          aggregate data, expert testimony, and the sworn testimony of
          witnesses.” CPC section 745(d) states that data may be sought for good
          cause. According to CPC section 745(h)(1), “more frequently sought or
          obtained” or “more frequently imposed” means that "the totality of the
          evidence demonstrates a significant difference in seeking or obtaining
          convictions or in imposing sentences comparing individuals who have
          engaged in similar conduct and are similarly situated, and the
          prosecution cannot establish race-neutral reasons for the disparity. .
          . Statistical significance is a factor the court may consider, but is
          not necessary to establish a significant difference. ”
        </p>
        <p>
          This tool is intended to help you access and analyze criminal justice
          data and identify potential racial disparities for counties across
          California and the state as a whole. Please reach out to us with any
          questions or potential errors you spot by emailing
          paperprisons@gmail.com. Your feedback will help us improve the tool.
          Thank you.
        </p>
      </GenericPage>
      <GenericPage id="about-the-data">
        <h2>About the Data</h2>
        <p>
          The source for data on this site is a comprehensive dataset of all
          arrests, charges, convictions, and sentences in California (Criminal
          Offender Record Information (CORI)), available to researchers through
          the California Department of Justice Automated Criminal History System
          (ACHS) through the CA DOJ Research Data Request process. Our records
          were downloaded between 9/23/2021 and 9/29/2021; the data we present
          therefore ranges from 2010 through (nearly) the first nine months of
          2021.* Among known disadvantages of the CORI data are that it does not
          include information on legal representation, plea-bargaining, or the
          conditions of the arrest (such as whether or not a weapon was present)
          which might legitimately be taken into account by the prosecution in
          deciding to characterize an alleged crime as a particular offense, or
          as a felony or misdemeanor. Two additional shortcomings of our
          database are that it does not include juvenile records or out-of-state
          records. Errors in underlying data are due to reporting errors and/or
          fundamental limitations to the Automated Criminal History System set
          up and maintained by CA DOJ.
        </p>
        <p>
          The CORI source data used for the tool are anonymous, with names
          removed and separate individuals identified only by an internal ID
          code. Personally identifying information, such as date of birth or
          social security number, has been removed. The tool reports summaries
          of the CORI data that have been processed to calculate counts (raw
          numbers) or rates for the specified user query. These summaries are
          never reported at the level of a particular individual.
        </p>

        <p>
          <b>*</b>2021 rates per population are adjusted upward by 12/9 to
          account for the limitation of the data to the first 9 months of the
          year.
        </p>
      </GenericPage>
      <GenericPage id="methodology">
        <h2>Methodology</h2>
        <p>
          On the "Paper Prisons Racial Justice Act Tool" page, you can customize
          the data in various ways. This methodology section presents important
          information about the data provided in this website and how you can
          use it for your own analysis.
        </p>
        <h3>Customization</h3>
        <p>
          You can customize the data presented by year, county, event point,
          race/ethnicity, measurement (metric), and offense. Data you see will
          depend upon your customization for each category. The{" "}
          <strong>event points</strong> include arrests, charges filed in court,
          convictions, felony convictions, and prison sentences. We explain the
          different <strong>measurements</strong> available and how they were
          calculated, as well as some limitations of the data, below.
        </p>
        <h3>Incidents & Lifecycle of a Case </h3>
        <p>
          The source (CORI) data set records each of the events associated with
          a given cycle of an individual’s involvement with the criminal justice
          system, where a cycle is defined as the series of events in the
          criminal justice system that flow from a specific initial incident for
          an individual. A cycle typically begins with an arrest, in which a
          person may be charged with one or more offenses. The arrest step may
          be followed by a prosecutor filing charges in court on one or more
          offenses. Offenses filed in court may be the same as or different from
          those charged at arrest, with changes occurring because of plea deals
          or prosecutorial discretion. The offenses charged at court lead to a
          disposition on each offense, such as a conviction, dismissal,
          acquittal, or other outcome. A conviction results in a sentence, which
          may include incarceration. The CORI data come from the courts, not
          from the corrections system, so we do not have information on actual
          incarcerations or terms served, only sentences to incarceration.
        </p>
        <p>
          In our tool, we count the number of incidents for which a given
          offense was charged. An incident is associated with a specific offense
          charged in a specific cycle. Multiple counts of the same offense
          charged for the same incident are only counted once in the tool. For
          example, suppose that following a particular arrest, a person ended up
          convicted in court on three counts of PC 242 (battery) and two counts
          of PC 148(A)(1) (obstructing/ resisting). For this cycle, we would
          count one incident of conviction for PC 242 and one incident of
          conviction for PC 148(A)(1).{" "}
        </p>
        <p>
          For arrest events, the year of the incident recorded in the tool is
          the minimum (first) year for the cycle. For court events (all
          non-arrest events), the year is the maximum (last) year for the cycle.
          We count any event that occurs in a cycle up to the last event. We
          assign years this way to take account of the fact that someone might
          be arrested on a charge in one year and go to court in a subsequent
          year.
        </p>
        <h3>Event Points</h3>
        <p>
          Racial disparities can occur at each of a number of specific event
          points in the criminal justice system. The tool provides metrics at
          the following specific event points.
        </p>
        <ul>
          <li>Arrest</li>
          <li>Charge filed at court</li>
          <li>Conviction (including misdemeanors and felonies)</li>
          <li>Felony conviction</li>
          <li>Prison sentence</li>
        </ul>
        <h3>Offenses</h3>
        <p>
          The CORI data set used for the tool includes information on a large
          number of criminal (California Penal Code) offenses; however, there
          are very small sample sizes for many offenses and populations,
          especially at the county-specific level. Due to confidentiality
          concerns, our website does not display data for any selections for
          which the metric of interest is constructed from samples of the data
          that contain 10 or fewer observations. Our charts and tables will show
          gaps and/or "N/A" when data are not available. This restriction
          results in very limited coverage of offenses in the smallest counties–
          in fact, we cannot report data for any offenses in California’s least
          populous county, Alpine County. Even in larger counties, the tool may
          not be able to display results for offenses that are relatively
          uncommon.
        </p>
        <p>
          Each Penal Code subsection is treated as a distinct offense (for
          example, PC 148(A) is treated as a distinct offense from PC 148(B)).
          Despite this level of detail, users should be aware that identifying
          offenses with PC subsections lumps together some charges that come
          under a single subsection but have different consequences. Examples
          would include so-called “wobbler” offenses that are felonies by
          default but may be charged as misdemeanors under some conditions.
          Burglary, which is PC 459, may be charged as first-degree or
          second-degree burglary, but the source data do not always distinguish
          the degree, so these charges are combined into a single offense code.
          Some common offenses are for probation violations (e.g., Penal Code
          section 1203.2), and their only corresponding event point is an
          arrest. For any given incident, the offense charged at court may be
          different from the offense cited at arrest, given prosecutorial
          decisions and plea bargaining. As a result, the probability of a
          particular outcome conditional on the prior event point may reflect
          imprecision going from arrest to court events. To ease searching, we
          include not just the PC code section number but the offense
          description (such as “PC 148(A) PC-OBSTRUCTS/RESISTS PUBLIC
          OFFICER/ETC”) most commonly attached to that offense in the CORI data.
        </p>
        <h3>Measurements</h3>
        <p>Five different metrics can be viewed in the tool:</p>
        <ol>
          <li>
            <p>
              <b>Raw number</b> is a count of the actual number of incidents in
              the selected category defined by county, offense, year, race, and
              event point. For example, a query of the tool for convictions in
              Alameda County in 2016 for Black persons on the offense PC
              148(A)(1) returns a raw number of 58. This means there were 58
              incidents involving convictions of Black persons on the charge of
              PC 148(A)(1) recorded in Alameda County in 2016. The tool counts
              incidents, not individuals, so 58 conviction incidents might
              represent fewer than 58 individuals, because a given individual
              might have been charged with the same offense on more than one
              occasion.
            </p>
          </li>
          <li>
            <p>
              <b>Rate per population</b> measures the rate at which a given
              event or decision occurs for a selected racial or ethnic group,
              relative to that group’s total population in the county.
              Specifically, it is the raw number of criminal justice decisions
              of the requested type for the requested ethnic group during the
              requested year, per 100 individuals of that group in the county
              population. Population data come from the American Community
              Survey (ACS), which is a large national survey run by the U.S.
              Census Bureau. All of our population estimates for different
              ethnicities use the 5-year ACS sample for the combined period
              2016-2020. ACS summary tables were accessed through the Census
              Bureau API interface (see{" "}
              <a href="https://www.census.gov/programs-surveys/acs/data/data-via-api.html">
                {" "}
                https://www.census.gov/programs-surveys/acs/data/data-via-api.html
              </a>
              ), using the R package tidycensus (see{" "}
              <a href="https://walker-data.com/tidycensus/">
                https://walker-data.com/tidycensus/
              </a>
              ). You can download the Census data at{" "}
              <a
                href="https://docs.google.com/spreadsheets/d/1acKdr3w9NlALgfUt8nLbtSWDqEfVxyQLKuz3r_pGkes/edit#gid=840124101"
                target="_blank"
              >
                this link
              </a>
              {"."}
            </p>
            <p>
              Example: If there were 350 incidents in which Hispanic individuals
              had been arrested in county X on a charge of PC 459 (burglary)
              during the year in question, and the Hispanic population of county
              X was 100,000, the rate per 100 population would be
              350/(100,000/100) = 0.35 per 100 population.
            </p>
          </li>
          <li>
            <p>
              <b>Rate per prior event point</b> measures the rate (in percent)
              at which a given event or decision occurs for a selected racial or
              ethnic group, relative to the number of people in that group at
              risk of that event. Specifically, it is the number of criminal
              justice decisions of the requested type for the requested ethnic
              group during the requested year, divided by the number of
              individuals of that group who had reached the immediately prior
              step or event point in the criminal justice process and were thus
              “at risk” of this decision.
            </p>
            <p>
              Example: Suppose there were 100 incidents in a particular county
              and year in which Hispanic individuals were charged in court with
              burglary (PC 459), and in 60 of those incidents they were
              convicted of burglary. Then the rate of conviction per prior event
              point (charge in court) would be 60/100 = 0.6 or 60%.
            </p>
          </li>
          <li>
            <p>
              <b>Disparity gap per population</b> compares the rate per
              population of a given racial/ethnic group with that of
              non-Hispanic White individuals. The racial gap can be considered
              the chance that a person of the given race/ethnicity experiences a
              certain outcome or decision, relative to the chances of a
              non-Hispanic White adult, given underlying populations.
            </p>
            <p>
              Example: Suppose that in a particular county in a particular year,
              there were 2 incidents in which Black adults experienced felony
              convictions for burglary for every 100 Black individuals in the
              population, and 1 such incident per 100 non-Hispanic White
              individuals. Then the disparity gap per population for Black
              relative to White is 2/1 = 2.{" "}
            </p>
          </li>
          <li>
            <p>
              <b>Disparity gap per prior event point</b> compares the rate per
              prior event point of a given racial/ethnic group with that of
              non-Hispanic White individuals. It shows the chances that a person
              of the given race/ethnicity experiences a certain outcome or
              decision, given that they have reached a specific prior event
              point, relative to the chances of a non-Hispanic White adult,
              given that they have reached the same prior event point.
            </p>
            <p>
              Example: Suppose that in a particular county in a particular year,
              of 100 incidents in which Black individuals were charged with
              burglary in court, 50 incidents resulted in convictions, compared
              with 40 per 100 for non-Hispanic White individuals. Then the
              disparity gap per prior event point for Black relative to White is
              50/40 = 1.25.
            </p>
          </li>
        </ol>
        <h3>Racial classifications</h3>
        <p>
          The DOJ CORI data source indicates the racial/ethnic identity of each
          individual with a single mutually exclusive “race” identifier. The
          classifications include Black, Hispanic, Native American, White, a
          number of Asian/Pacific Islander identities, as well as “other” and
          unknown categories. Multiple racial identities are not recorded. The
          tool collapses the various CORI categories into five groups: Asian
          American/Pacific Islander, Black, Hispanic, Native American, and
          White. Other groups are not included in the tool. How racial/ethnic
          groups are assigned in the CORI data (whether self-identified or
          assigned by authorities) is not indicated in the source.
        </p>
        <p>
          The racial/ethnic classifications used by the Census Bureau (ACS),
          from which we obtain population numbers, do not correspond directly to
          the CORI data categories. In particular, the ACS asks separate
          questions about racial identity and Hispanic/Latino identity, and
          allows individuals to belong to more than one race. For our
          comparisons, we use the following correspondences. The ACS categories
          we use are not mutually exclusive, but in our judgment are likely to
          correspond reasonably well to the CORI mutually exclusive categories.
        </p>
        <table>
          <tr>
            <td>CORI race</td>
            <td>ACS race and Hispanic identity</td>
          </tr>
          <tr>
            <td>AAPI (combination of Asian and PI groups)</td>
            <td>Asian American or Pacific Islander race alone</td>
          </tr>
          <tr>
            <td>Black</td>
            <td>Black or African American race alone</td>
          </tr>
          <tr>
            <td>Hispanic</td>
            <td>Hispanic or Latin American, any race</td>
          </tr>
          <tr>
            <td>Native American</td>
            <td>Native American alone or in combination with other race(s)</td>
          </tr>
          <tr>
            <td>White</td>
            <td>White race alone, not Hispanic</td>
          </tr>
        </table>
        <h3>Confidentiality Protections</h3>
        <p>
          Due to confidentiality concerns, our website does not display data for
          counties in which the population for a specific studied racial/ethnic
          group is 10 or fewer for the year being viewed. County data that are
          hidden when individual counties are selected will always be shown
          within statewide totals, as well as when multiple counties are
          selected and confidentiality is not at risk. Our charts and tables
          will show gaps and/or "N/A" when data are not available.
        </p>
      </GenericPage>
      <GenericPage id="acknowledgements">
        <h2>Acknowledgements</h2>
        <p>
          The styling of this website was inspired by the{" "}
          <a href="https://californiadata.burnsinstitute.org/about">
            California State of Disparities
          </a>{" "}
          website, a data project of the the{" "}
          <a href="https://californiadata.burnsinstitute.org/explore/counts#y=2018&c=1-58&o=1-60&d=1,7,15,17&a=5-24&g=f,m&e=a,b,l,n,w&m=dg">
            Burns Institute
          </a>
          , whom we thank.
        </p>
        <p>
          This tool represents the collaboration of many dedicated volunteers
          and Paper Prisons team members including Bill Sundstrom, Yabo Du,
          Bennett Cyphers, Rayna Saron, Akhil Raj, Arthi Kundadka, Yangxier Sui,
          Lukas Pinkston, , Navid Shaghaghi and Colleen Chien.
        </p>
        <p>
          For more information about the RJA, please see:
          <ul>
            <li>
              Proving Actionable Racial Disparity Under the California Racial
              Justice Act (exploring the disparities standard of the RJA and how
              to apply it)
              <br />
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4392014">
                https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4392014
              </a>
            </li>
            <li>
              Paper Prisons’ Testimony at California Penal Committee Hearing on
              CA Racial Justice Act
              <br />
              <a href="https://paperprisons.org/news/2023/04/20/paper-prisons-testimony-at-california-penal-committee-hearing-on-ca-racial-justice-act/">
                https://paperprisons.org/news/2023/04/20/paper-prisons-testimony-at-california-penal-committee-hearing-on-ca-racial-justice-act/
              </a>
            </li>
          </ul>
        </p>
      </GenericPage>
      <GenericPage id="about-the-initiative">
        <h2>About the Initiative</h2>
        <p>
          The Paper Prisons Initiative (paperprisons.org) is a
          multi-disciplinary research initiative focused on documenting and
          narrowing the “second chance gap” between eligibility for relief from
          the criminal justice system and its delivery due to hurdles in access
          to relevant information and data. The paper that describes the concept
          of the “second chance gap” is Colleen V. Chien, “America’s Paper
          Prisons: The Second Chance Gap,”119 Mich. L. Rev. 519 (2020)
        </p>
      </GenericPage>
      <BackToTopButton />
    </DynamicLayout>
  );
}