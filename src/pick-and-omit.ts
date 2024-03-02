export { };

type DetailedProfile = {
    name: string;
    height: number;
    weight: number;
}

// nameとweightだけ必要な場合 Pick、DetailedProfileにないものを指定したらエラーとなる
type SimpleProfile = Pick<DetailedProfile, "name" | "weight">;

// heightだけ取り除く Omit
type HeightProfile = Omit<DetailedProfile, "height">;

type MyOmit = Pick<DetailedProfile, Exclude<"name" | "height" | "weight", "height">>;
type MySmallProfile = MyOmit;