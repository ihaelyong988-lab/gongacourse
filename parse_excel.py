import pandas as pd
import json
import os
import datetime

file_path = "가고픈곳 230307.xlsx"

if not os.path.exists(file_path):
    print("Error: Excel file not found.")
    exit(1)

# datetime 객체를 JSON 문자열로 직렬화하기 위한 헬퍼
def json_default(obj):
    if isinstance(obj, (datetime.datetime, datetime.date)):
        return obj.isoformat()
    if isinstance(obj, pd.Timestamp):
        return obj.to_pydatetime().isoformat()
    raise TypeError(f"Type {type(obj)} not serializable")

try:
    xl = pd.ExcelFile(file_path)
    sheet_names = xl.sheet_names
    
    trek_sheet = None
    food_sheet = None
    
    # 시트명 포함 매칭
    for sheet in sheet_names:
        if "트레킹" in sheet or "트래킹" in sheet:
            trek_sheet = sheet
        elif "맛집" in sheet:
            food_sheet = sheet
            
    result = {
        "sheets": sheet_names,
        "trekking": None,
        "food": None
    }
    
    if trekking_sheet_name := trek_sheet:
        df_trek = pd.read_excel(file_path, sheet_name=trekking_sheet_name)
        df_trek = df_trek.fillna("")
        result["trekking"] = {
            "sheet_name": trekking_sheet_name,
            "columns": df_trek.columns.tolist(),
            "data": df_trek.to_dict(orient="records")
        }
        
    if food_sheet_name := food_sheet:
        df_food = pd.read_excel(file_path, sheet_name=food_sheet_name)
        df_food = df_food.fillna("")
        result["food"] = {
            "sheet_name": food_sheet_name,
            "columns": df_food.columns.tolist(),
            "data": df_food.to_dict(orient="records")
        }
        
    # JSON 파일로 안전하게 기록
    with open("excel_data.json", "w", encoding="utf-8") as f:
        json.dump(result, f, default=json_default, ensure_ascii=False, indent=2)
        
    print("Excel parsing completed successfully. Output saved to excel_data.json.")

except Exception as e:
    import traceback
    print("Error details:", str(e))
    traceback.print_exc()
