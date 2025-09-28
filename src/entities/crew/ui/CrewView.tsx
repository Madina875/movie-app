import { memo, useState } from "react";
import { useCrew } from "../model/useCrew";
import { useParams } from "react-router-dom";
import { createImageUrl } from "@/shared/utils";

export const CrewView = memo(() => {
  const { id } = useParams();
  const { getCrewById } = useCrew();
  const { data } = getCrewById(id as string);
  const [showFull, setShowFull] = useState(false);

  const bio = data?.biography || "";
  const shortBio = bio.slice(0, 400);

  return (
    <div className="container">
      <section className="md:grid md:grid-cols-2 gap-10 md:my-10 flex flex-col mb-30">
        <div>
          <img
            className="w-full"
            src={createImageUrl(data?.profile_path)}
            width={400}
            alt=""
          />
        </div>
        <div className="pt-10">
          <h1 className="text-3xl mb-5">{data?.name}</h1>
          <p className="my-5">also known as : {data?.also_known_as}</p>

          <p>
            {showFull ? bio : shortBio}
            {bio.length > 400 && (
              <button
                onClick={() => setShowFull(!showFull)}
                className="ml-2 text-red-500 underline"
              >
                {showFull ? "See Less" : "See More"}
              </button>
            )}
          </p>

          <div className="mt-3">
            <p>place of birth : {data?.place_of_birth}</p>
            <p>known for department : {data?.known_for_department}</p>
            <p>birthday : {data?.birthday}</p>
            <p>deathday : {data?.deathday}</p>
          </div>
        </div>
      </section>
    </div>
  );
});
