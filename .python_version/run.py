#!/Users/nicolas/.asdf/shims/python
"""
Simple script to run the application
"""

if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="127.0.0.1", port=7779, reload=True, log_level="info")
