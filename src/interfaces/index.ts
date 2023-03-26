export type ComboItem = {
  id: number;
  name: string;
}

// 
export type selRangeItem = {
  min: number;
  max: number;
  init: number;
}

// 食品マスタ
export type MealMasterItem = {
  id:number;
  ori_name:string;
  ex_name:string;
  kana_name:string;
  memo:string;
  maker_id:number;
  bln_compound:number;
}

// 食品マスター容量ごと
export type MealMasterItemChild = {
  item_id:number;
  row:number;
  memo:string;
  created_date:Date;
  created_time:Date;
  updated_date:Date;
  updated_time:Date;
  price:number;
  base_type:number;
  base_visible:number;
  base_int_quant:number;
  base_gram_quant:number;
  pack_quant:number;
  pack_unit:string;
  gram_quant:number;
  gram_unit:string;
  base_data: MealNutrition;
  res_data: MealNutrition;

}

// 食品マスター組合せ項目
export type MealMasterItemCombo = {
  id:number;
  row:number;
  meal_id:number;
  meal_row:number;
  meal_ori_name:string;
  meal_ex_name:string;
  meal_kana_name:string;
  meal_memo:string;
  maker_id:number;
  created_date:Date;
  created_time:Date;
  updated_date:Date;
  updated_time:Date;
  price:number;
  base_type:number;
  base_visible:number;
  base_int_quant:number;
  base_gram_quant:number;
  pack_quant:number;
  pack_unit:string;
  gram_quant:number;
  gram_unit:string;
  base_data: MealNutrition;
  res_data: MealNutrition;
}

// 食事登録ー日にち
export type MealRegisteredDate = {
  id:number;
  stamp_date:Date;
  stamp_time:Date;
  memo:string;
  type:number;
  res_data: MealNutrition;
  items: MealRegisteredItem[];
}

// 食事登録ー単品
export type MealRegisteredItem = {
  id: number;
  row:number;
  meal_id:number;
  meal_ori_name:string;
  meal_ex_name:string;
  meal_kana_name:string;
  memo:string;
  maker_id:number;
  bln_compound:boolean; 
  created_date:Date;
  created_time:Date;
  updated_date:Date;
  updated_time:Date;
  price:number;
  bln_custom:boolean;
  base_int_quant:number;
  base_gram_quant:number;
  pack_quant:number;
  pack_unit:string;
  gram_quant:number;
  gram_unit:string;
  base_data: MealNutrition;
  res_data: MealNutrition;
  child: MealRegisteredItemChild[];
}

// 食事登録ー複数項目
export type MealRegisteredItemChild = {
  id:number;
  row:number;
  meal_id:number;
  meal_row:number;
  meal_ori_name:string;
  meal_ex_name:string;
  meal_kana_name:string;
  meal_memo:string;
  maker_id:number;
  created_date:Date;
  created_time:Date;
  updated_date:Date;
  updated_time:Date;
  price:number;
  base_type:number;
  base_visible:number;
  base_int_quant:number;
  base_gram_quant:number;
  pack_quant:number;
  pack_unit:string;
  gram_quant:number;
  gram_unit:string;
  base_data: MealNutrition;
  res_data: MealNutrition;
}


// メーカー・ブランド・タイプ
export type MealMaker = {
  id:number;
  ori_name:string;
  ex_name:string;
  kana_name:string;
  memo:string;
}

// 食事タイプ
export type MealType = {
  id:number;
  ori_name:string;
  ex_name:string;
  kana_name:string;
  memo:string;
}

// 栄養明細
export type MealNutrition = {
  pro: number; 
  fat: number;
  Carb: number;
  Cal: number;
}
