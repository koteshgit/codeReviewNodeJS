var message =  {
			"type": "template",
			"payload": {
				"template_type": "dropdown_template",
				"heading":"May I know the reason for return?",
				"elements": [
					{
						"title": "Color Discrepancy",
						"value":"COLOR"
					},
					{
						"title": "Defective",
						"value":"DEFECTIVE"
					},
					{
						"title": "Not as described",
						"value":"NOT_AS_DESCRIBED"
					},
					{
						"title": "Other",
						"value":"OTHER"
					},
					{
						"title": "Size too large",
						"value":"SIZE_TOO_LARGE"
					},
					{
						"title": "Size too small",
						"value":"SIZE_TOO_SMALL"
					},
					{
						"title": "Style",
						"value":"STYLE"
					},
					{
						"title": "Ordering Error",
						"value":"UNKNOWN"
					},
					{
						"title": "Unwanted",
						"value":"UNWANTED"
					},
					{
						"title": "Wrong Product Shipped",
						"value":"WRONG_ITEM"
					}
			   
				], 
			}
		};
		print(JSON.stringify(message)); 
