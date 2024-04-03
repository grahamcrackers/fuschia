export type ConfigurableOption = {
    attribute_code: string;
    attribute_id: string;
    uid: string;
    label: string;
    values: ConfigurableOptionValue[];
};

export type ConfigurableOptionValue = {
    uid: string;
    default_label: string;
    label: string;
    store_label: string;
    use_default_value: boolean;
    value_index: number;
    swatch_data: SwatchData;
};

export type SwatchData = {
    value: string;
}
