import requests
import json
import os
from urllib.parse import urlparse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from dotenv import load_dotenv

load_dotenv()

@csrf_exempt
def url_classifier(request):
    data = json.loads(request.body)
    target_url = data.get("target_url", "")

    parsed_url = urlparse(target_url)
    domain = parsed_url.netloc

    if not domain:
        domain = parsed_url.path.split('/')[0]


    api_key = os.getenv("IP_QUALITY_SCORE_KEY")

    try:
        data = requests.get(f"https://www.ipqualityscore.com/api/json/url/{api_key}/{domain}")
        json_data = data.json()
    except Exception as e:
        return JsonResponse({'status': 'error', 'error': f"{type(e)}: {e}"})  # Return error in json format

    return JsonResponse({'status': 'ok', 'result': json_data})  # Return answer in json format
