from django.shortcuts import render

def page1(request):
    return render(request=request, template_name='test_app/index.html')

def page2(request):
    return render(request=request, template_name='test_app/page2.html')

def page3(request):
    return render(request=request, template_name='test_app/page3.html')

def test(request):
    name = 'name'

    context={
        'name': name
    }

    return render(request=request, template_name='test_app/index.html', context=context)
