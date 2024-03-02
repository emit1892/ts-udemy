export { };

// Record<k, T>

type Prefectures = "Tokyo" | "Chiba" | "Tottori";

type Covid19InfectionInfo = {
    kanja_name: string;
    confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
    Tokyo: { kanja_name: "東京", confirmed_cases: 1960 },
    Chiba: { kanja_name: "千葉", confirmed_cases: 249 },
    Tottori: { kanja_name: "鳥取", confirmed_cases: 2 },
    // Shiga: { kanja_name: "滋賀", confirmd_cases: true }, // error
};
