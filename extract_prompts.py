import json
import sys

def extract_text(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)
    
    for i, entry in enumerate(data):
        try:
            content_str = entry.get('contents', '{}')
            content = json.loads(content_str)
            parts = content.get('parts', [])
            for part in parts:
                if 'text' in part:
                    print(f"--- Entry {i} ---")
                    print(part['text'])
                    print("\n")
        except Exception as e:
            continue

if __name__ == "__main__":
    extract_text(sys.argv[1])
